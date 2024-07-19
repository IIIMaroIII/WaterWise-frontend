import WaterForm from 'src/components/REUSABLE/WaterForm/WaterForm.jsx';

const WaterModal = ({ operationType }) => {
  const waterFormType = () => {
    switch (operationType) {
      case 'edit':
        return (
          <div>
            <h2>Edit the entered amount of water</h2>
            <h3>Correct entered data:</h3>
          </div>
        );
      case 'add':
        return (
          <div>
            <h2>Add the entered amount of water</h2>
            <h3>Choose a value:</h3>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <h2>{waterFormType()}</h2>
      <WaterForm />
    </div>
  );
};

export default WaterModal;
