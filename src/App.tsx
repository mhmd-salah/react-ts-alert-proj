
import { Info } from 'lucide-react';
import './App.css'
import Alert from './components/Ui/Alert/Alert';

function App() {
  return (
    <>
      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"Note"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
    </>
  );
}

export default App
