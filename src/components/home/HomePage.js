import React, {useState} from "react";
import { Link } from "react-router-dom";


class HomePage extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      date: new Date (),
      dark: false
    }

    this.changeDark = this.changeDark.bind(this);

  }
    
  setDate (e) {
    this.setState({date: e});
  }
  changeDark (event) {

    if (this.state.dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.setState({dark: !this.state.dark});

  }
  render () {
    return (
      <>

        <header
          class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-home-pattern"
        >
          <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
            Welcome to my site!
          </div>
        </header>
        <div class="max-w-lg m-auto">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
            magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
            sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
            nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
            odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
            laoreet sem, semper molestie libero.
          </p>
          <p class="mb-4">
            Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
            fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
            non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
            Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
            varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
            semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
            ipsum, id consequat nulla nunc in ligula.
          </p>
          <p class="mb-12">
            Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
            dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
            dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
            fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
            fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
            vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
            neque.
          </p>
        </div>
        <section
          class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
        >
          <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
            Parralax inline
          </div>
        </section>
        <div class="max-w-lg m-auto">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
            magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
            sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
            nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
            odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
            laoreet sem, semper molestie libero.
          </p>
          <p class="mb-4">
            Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
            fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
            non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
            Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
            varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
            semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
            ipsum, id consequat nulla nunc in ligula.
          </p>
          <p class="mb-4">
            Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
            dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
            dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
            fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
            fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
            vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
            neque.
          </p>
        </div>

        <button onClick={this.changeDark}>Dark ele</button>
      </>
    )
  }
  
  
}

export default HomePage;
