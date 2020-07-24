import { Select } from './select/select';
import './select/styles.scss';

const select = new Select('#select', {
  placeholder: 'Choose an element',
  // selectedId: '1',
  data: [
    { id: '1', value: 'React' },
    { id: '2', value: 'Vue' },
    { id: '3', value: 'Angular' },
    { id: '4', value: 'Next' },
    { id: '5', value: 'Gatsby' },
  ],
  onSelect(item) {
    console.log('Selected item', item);
  },
});

window.s = select;
