PetiteVue.createApp({
  bookmarked: false,
  openMenu: false,
  openModal: false,
  bookmarked: false,
  selectedPledge: false,
  selectedBambo: false,
  selectedBlackEdition: false,
  selectedMahogany: false,
  successModal: false,
  tabs: ['About', 'Discover', 'Get Started'],
    pledge: {
      title: 'Pledge with no reward',
      description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      quantity: 0
    },
    bambo: {
      title: 'Bamboo Stand',
      pledge: 'Pledge $25 or more',
      description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, andyou’ll be added to a special Backer member list.",
      quantity: 101,
      selected: 'Selected Reward'
    },
    blackEdition: {
      title: "Black Edition Stand",
      pledge: 'Pledge $75 or more',
      description: "You get a Black Special Edition computer and a personal thank you. You'll be added to a special Backer member list. Shipping is included",
      quantity: 64,
      selected: 'Selected Reward'

    },
    mahogany: {
      title: "Mahogany Special Edition",
      pledge: 'Pledge $200 or more',
      description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you! You'll be added to a special Backer member list. Shipping is included",
      quantity: 0,
      selected: 'Out of Stock'
    },
    closeSuccessModal(){
      this.successModal = false
      this.openModal = false
    }
}).mount()