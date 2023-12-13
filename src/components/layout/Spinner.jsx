import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="w-100 mt-20 text center">
      <img
        style={{ display: 'block', margin: '0 auto' }}
        width={180}
        className="text-center mx auto"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
