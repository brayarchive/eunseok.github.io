// Cache gallery container
const galleryContainer = document.querySelector('.react-gallery');

// Create new array with URLs for images
let imgUrls = [
'./gal/gal_img_JB_001.jpg',
'./gal/gal_img_JB_002.jpg',
'./gal/gal_img_JB_003.jpg',
'./gal/gal_img_JB_004.jpg',
'./gal/gal_img_JB_005.jpg',
'./gal/gal_img_JB_006.jpg',
'./gal/gal_img_JB_007.jpg',
'./gal/gal_img_JB_008.jpg',
'./gal/gal_img_JB_009.jpg',
'./gal/gal_img_JB_010.jpg',
'./gal/gal_img_JB_011.jpg',
'./gal/gal_img_JB_012.jpg',
'./gal/gal_img_JB_013.jpg',
'./gal/gal_img_JB_014.jpg',
'./gal/gal_img_JB_015.jpg',
'./gal/gal_img_JB_016.jpg',
'./gal/gal_img_JB_017.jpg',
'./gal/gal_img_JB_018.jpg',
'./gal/gal_img_JB_019.jpg',
'./gal/gal_img_JB_020.jpg',
'./gal/gal_img_JB_021.jpg',
'./gal/gal_img_JB_022.jpg',
'./gal/gal_img_JB_023.jpg',
'./gal/gal_img_JB_045.jpg',
'./gal/gal_img_JB_025.jpg',
'./gal/gal_img_JB_026.jpg',
'./gal/gal_img_JB_027.jpg',
'./gal/gal_img_JB_028.jpg',
'./gal/gal_img_JB_029.jpg',
'./gal/gal_img_JB_030.jpg',
'./gal/gal_img_JB_031.jpg',
'./gal/gal_img_JB_032.jpg',
'./gal/gal_img_JB_033.jpg',
'./gal/gal_img_JB_034.jpg',
'./gal/gal_img_JB_035.jpg',
'./gal/gal_img_JB_036.jpg',
'./gal/gal_img_JB_037.jpg',
'./gal/gal_img_JB_038.jpg',
'./gal/gal_img_JB_039.jpg',
'./gal/gal_img_JB_040.jpg',
'./gal/gal_img_JB_041.jpg',
'./gal/gal_img_JB_042.jpg',
'./gal/gal_img_JB_043.jpg',
'./gal/gal_img_JB_044.jpg',
'./gal/gal_img_JB_044.jpg',
'./gal/gal_img_JB_046.jpg',
'./gal/gal_img_JB_047.jpg',
'./gal/gal_img_JB_048.jpg',
'./gal/gal_img_JB_057.jpg',
'./gal/gal_img_JB_058.jpg',
'./gal/gal_img_JB_059.jpg',
'./gal/gal_img_JB_060.jpg',
'./gal/gal_img_JB_061.jpg',
'./gal/gal_img_JB_062.jpg',
'./gal/gal_img_JB_063.jpg',
'./gal/gal_img_JB_064.jpg',
'./gal/gal_img_JB_065.jpg',
'./gal/gal_img_JB_066.jpg',
'./gal/gal_img_JB_067.jpg',
'./gal/gal_img_JB_068.jpg',
'./gal/gal_img_JB_069.jpg',
'./gal/gal_img_JB_070.jpg',
'./gal/gal_img_JB_071.jpg',
'./gal/gal_img_JB_072.jpg',
'./gal/gal_img_JB_073.jpg',
'./gal/gal_img_JB_074.jpg',
'./gal/gal_img_JB_075.jpg',
'./gal/gal_img_JB_076.jpg',
'./gal/gal_img_JB_077.jpg',
'./gal/gal_img_JB_078.jpg',
'./gal/gal_img_JB_079.jpg',
'./gal/gal_img_JB_080.jpg',
'./gal/gal_img_JB_081.jpg',
'./gal/gal_img_JB_082.jpg',
'./gal/gal_img_JB_083.jpg',
'./gal/gal_img_JB_084.jpg',
'./gal/gal_img_JB_085.jpg',
'./gal/gal_img_JB_086.jpg',
'./gal/gal_img_JB_087.jpg',
'./gal/gal_img_JB_088.jpg',
'./gal/gal_img_JB_089.jpg',
'./gal/gal_img_JB_090.jpg',
'./gal/gal_img_JB_091.jpg',
'./gal/gal_img_JB_092.jpg',
'./gal/gal_img_JB_093.jpg',
'./gal/gal_img_JB_094.jpg',
'./gal/gal_img_JB_095.jpg',
'./gal/gal_img_JB_096.jpg',
'./gal/gal_img_JB_097.jpg',
'./gal/gal_img_JB_098.jpg',
'./gal/gal_img_JB_099.jpg',
'./gal/gal_img_JB_100.jpg',
'./gal/gal_img_JB_101.jpg',
'./gal/gal_img_JB_102.jpg',
'./gal/gal_img_JB_103.jpg',
'./gal/gal_img_JB_104.jpg',
'./gal/gal_img_JB_105.jpg',
'./gal/gal_img_JB_106.jpg',
'./gal/gal_img_JB_107.jpg',
'./gal/gal_img_JB_108.jpg',
'./gal/gal_img_JB_109.jpg',
'./gal/gal_img_JB_110.jpg',
'./gal/gal_img_JB_111.jpg',
'./gal/gal_img_JB_112.jpg',
'./gal/gal_img_JB_113.jpg',
'./gal/gal_img_JB_114.jpg',
'./gal/gal_img_JB_115.jpg',
'./gal/gal_img_JB_116.jpg',
'./gal/gal_img_JB_117.jpg',
'./gal/gal_img_JB_118.jpg',
'./gal/gal_img_JB_119.jpg',
'./gal/gal_img_JB_120.jpg',
'./gal/gal_img_JB_121.jpg',

];


// Component for gallery image
class GalleryImage extends React.Component {
  render() {
    return (
      React.createElement("img", { className: this.props.className, src: this.props.src, alt: this.props.alt }));

  }}


// Component for gallery modal
class GalleryModal extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return (
      React.createElement("div", { isOpen: this.props.isOpen, className: "modal-overlay", onClick: this.props.onClick, name: this.props.name },
      React.createElement("div", { className: "modal-body" },
      React.createElement("a", { className: "modal-close", href: "#", onClick: this.props.onClick }, React.createElement("span", { className: "fa fa-times" })),

      React.createElement("img", { src: this.props.src }))));



  }}


// Component for gallery
class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: '' };


    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    return (
      React.createElement("div", { refs: "gallery-container", className: "container-fluid gallery-container" },
      React.createElement("div", { className: "row" },

      imgUrls.map((url, index) => {
        return React.createElement("div", { className: "col-sm-6 col-md-3 col-xl-2" },
        React.createElement("div", { className: "gallery-card" },
        React.createElement(GalleryImage, { className: "gallery-thumbnail", src: url, alt: 'Image number ' + (index + 1) }),

        React.createElement("span", { className: "card-icon-open fa fa-expand", value: url, onClick: e => this.openModal(url, e) })));


      })),



      React.createElement(GalleryModal, { isOpen: this.state.showModal, onClick: this.closeModal, src: this.state.url })));


  }

  // Function for opening modal dialog
  openModal(url, e) {
    this.setState({
      showModal: true,
      url: url });

  }

  // Function for closing modal dialog
  closeModal() {
    this.setState({
      showModal: false,
      url: '' });

  }}


// Let's render the whole thing
ReactDOM.render(
React.createElement(Gallery, { imgUrls: imgUrls }),
galleryContainer);