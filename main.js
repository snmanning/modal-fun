const modal = {

  isHidden: true,
  selectedImage: '',

  init() {
    this.cacheDom();
    this.bindEventListeners();
    this.render();
  },

  cacheDom() {
    this.modalContainer = document.querySelector('.modal-container');
    this.closeBtn = document.querySelector('.close');
    this.modalImage = document.querySelector('.modal-image');
    this.overlay = document.querySelector('.overlay');
    this.imagesContainer = document.querySelector('.images');
  },

  bindEventListeners() {
    this.closeBtn.addEventListener('click', this.hideModal.bind(this));
    this.overlay.addEventListener('click', this.hideModal.bind(this));
    this.imagesContainer.addEventListener('click', this.showModal.bind(this));
  },

  showModal(evt) {
    if (evt.target.tagName === 'IMG') {
      this.isHidden = false;
      this.selectedImage = evt.target.src;
      this.render();
    }
  },

  hideModal() {
    this.isHidden = true;
    this.selectedImage = '';
    this.render();
  },

  render() {
    if (this.isHidden) {
      this.modalContainer.classList.add('hidden');
      this.overlay.classList.add('hidden');
    } else {
      this.modalContainer.classList.remove('hidden');
      this.overlay.classList.remove('hidden');
      this.modalImage.src = this.selectedImage;
    }
  },
};

modal.init();

window.modal = modal;
