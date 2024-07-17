import WaterForm from 'src/components/REUSABLE/WaterForm/WaterForm.jsx';

const WaterModal = ({ operationName = '' }) => {
  return (
    <div>
      {operationName === 'edit' ? (
        <div>
          <h2>Edit the entered amount of water</h2>
          <h3>Correct entered data:</h3>
        </div>
      ) : (
        <div>
          <h2>Edit the entered amount of water</h2>
          <h3>Choose a value:</h3>
        </div>
      )}
      <WaterForm />
    </div>
  );
};

export default WaterModal;
