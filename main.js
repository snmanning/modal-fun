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
    this.thumbnails = document.querySelectorAll('.thumbnail');
  },

  bindEventListeners() {
    this.closeBtn.addEventListener('click', this.hideModal.bind(this));
    this.thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', this.showModal.bind(this));
    });
  },

  showModal(evt) {
    this.isHidden = false;
    this.selectedImage = evt.target.src;
    this.render();
  },

  hideModal() {
    this.isHidden = true;
    this.selectedImage = '';
    this.render();
  },

  render() {
    if (this.isHidden) {
      this.modalContainer.classList.add('hidden');
    } else {
      this.modalContainer.classList.remove('hidden');
      this.modalImage.src = this.selectedImage;
    }
  },


};

modal.init();

window.modal = modal;
