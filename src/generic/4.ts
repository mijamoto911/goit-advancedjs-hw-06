/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface PageProps {
  title: string;
  likes: number;
}
class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
    console.log(this.props.likes);
  }
}

export {};
