import { Component } from './base-component.js';
import { Validatable, validate } from '../util/validation.js';
import { Autobind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';

// Project input class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleinputElement: HTMLInputElement;
  descriptioninputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');

    this.titleinputElement = this.element.querySelector(
      '#title'
    )! as HTMLInputElement;
    this.descriptioninputElement = this.element.querySelector(
      '#description'
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    )! as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent() {}

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleinputElement.value;
    const enteredDescription = this.descriptioninputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input!');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInput() {
    this.titleinputElement.value = '';
    this.descriptioninputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @Autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInput();
    }
  }
}
