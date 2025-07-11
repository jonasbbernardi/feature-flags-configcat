import { useFeatureFlag } from "configcat-react";
import SymptomChecker from "./components/SymptomChecker";

function App() {
  const {value: showChecker, loading} = useFeatureFlag('enableSymptomChecker', false);

  return loading ? (
    <div>
      Loading...
    </div>) : (
    <div>
      <h1>Patient Portal</h1>
      {showChecker ? (
        <SymptomChecker />
      ) : (
        <p>The symptom checker is currently unavailable.</p>
      )}
    </div>
  );
}

export default App;