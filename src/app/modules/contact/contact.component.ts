import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  template: `
    <section class="py-12">
      <div class="container mx-auto max-w-2xl px-4">
        <h1 class="text-3xl font-bold mb-6 text-center text-stone-800">
          Contacto
        </h1>
        <div class="mt-8">
          <p class="py-2 font-bold">📍 Remedios de Escalada 875</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.4256665054086!2d-57.589230089494635!3d-37.969696171819756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d90f5a9e9499%3A0xa233b2b5821fe84!2sRemedios%20de%20Escalada%20875%2C%20B7604IPK%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1747088077729!5m2!1ses-419!2sar"
            class="mx-auto h-96 w-80 sm:w-xl md:w-2xl"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          class="mt-8 mx-auto w-max sm:w-full flex gap-10 sm:gap-6 flex-col justify-evenly sm:flex-row"
        >
          <div class="flex items-center gap-4">
            <a
              href="https://instagram.com/shiaikandojo"
              target="_blank"
              rel="noopener"
              class="text-blue-600 group"
            >
              <button
                class="bg-linear-to-tr from-orange-200 via-pink-700 to-violet-500 p-2.5 rounded-full cursor-pointer group-hover:scale-115"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                  alt="Instagram"
                  class="w-7 h-7 invert align-baseline"
                />
              </button>
              <span class="align-super pl-2 hover:underline">
                &#64;shiaikandojo
              </span>
            </a>
          </div>
          <div class="flex items-center gap-4">
            <a
              href="https://wa.me/5492236361071?text=Hola%2C%20queria%20realizar%20una%20consulta%2E"
              target="_blank"
              rel="noopener"
              class="text-green-600 cursor-pointer group"
            >
              <button
                class="bg-green-600 p-2.5 rounded-full cursor-pointer group-hover:scale-115"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                  alt="WhatsApp"
                  class="w-7 h-7 invert"
                />
              </button>
              <span class="align-super hover:underline pl-2"
                >+54 9 223 636-1071
              </span>
            </a>
          </div>
          <div class="flex items-center gap-4">
            <a
              href="mailto:info@shiaikan.com"
              class="text-gray-700 cursor-pointer group"
            >
              <button
                class="cursor-pointer p-2.5 rounded-full border-2 border-gray-700 box-border group-hover:scale-115 transition-transform"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                  alt="Email"
                  class="w-7 h-7"
                />
              </button>
              <span class="align-super hover:underline pl-2">
                info&#64;shiaikan.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ContactComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contacto - Shiaikan Dojo - Mar del Plata');
    this.meta.updateTag({
      name: 'description',
      content:
        'Contactá a Shiaikan Dojo en Mar del Plata. Ubicación, redes sociales y medios de contacto para consultas sobre clases de Judo y eventos.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Contacto - Shiaikan Dojo - Mar del Plata',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Contactá a Shiaikan Dojo en Mar del Plata. Ubicación, redes sociales y medios de contacto para consultas sobre clases de Judo y eventos.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://shiaikandojo.netlify.app/contact',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: '/home/shiaikan-logo.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Contacto - Shiaikan Dojo - Mar del Plata',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Contactá a Shiaikan Dojo en Mar del Plata. Ubicación, redes sociales y medios de contacto para consultas sobre clases de Judo y eventos.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: '/home/shiaikan-logo.jpg',
    });
  }
}
