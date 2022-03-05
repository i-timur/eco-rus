export const getSlideBackgroundColor = (slideIndex: number) => {
  switch (slideIndex) {
    case 0:
      return 'bg-green';
    case 1:
      return 'bg-orange';
    case 2:
      return 'bg-mint';
    default:
      return '';
  }
};

export const PHONE_NUMBER_REGEXP = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/g