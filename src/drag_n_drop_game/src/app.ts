// Decorators

function Autobind2(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

// Project input class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleinputElement: HTMLInputElement;
  descriptioninputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

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
    this.attach();
  }

  @Autobind2
  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleinputElement.value);
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const projInput = new ProjectInput();
