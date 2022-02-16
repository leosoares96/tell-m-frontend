import swal from 'sweetalert';

const Alert = (status: boolean, text: string) => {
  swal({
    title: status ? 'Ok!' : 'oooops!',
    text: text,
    icon: status ? 'success' : 'warning',
  });
};
export default Alert;
