import { useState } from "react";
import axios from "axios";

const symptomsList = [
  "Fever",
  "Cough",
  "Headache",
  "Shortness of breath",
  "Fatigue"
];

export default function SymptomChecker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const toggleSymptom = (symptom: string) => {
    setSelected(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = async () => {
    try {
      const back_url = import.meta.env.VITE_BACKEND_URL;
      const res = await axios.post<{ message: string }>(`${back_url}/api/triage`, {
        symptoms: selected
      });
      setResult(res.data.message);
    } catch (err) {
      setResult("Error submitting symptoms.");
    }
  };

  return (
    <div>
      <h2>Symptom Checker</h2>
      <ul>
        {symptomsList.map(symptom => (
          <li key={symptom}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(symptom)}
                onChange={() => toggleSymptom(symptom)}
              />
              {symptom}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      {result && <p><strong>Result:</strong> {result}</p>}
    </div>
  );
}
