import { Routes, Route, Navigate } from 'react-router-dom';
import EDLLogin from './EDLLogin';     // Your login component
import CommHub from './CommHub';       // Your landing page component
import EmailTool from './EmailTool';
import IndividualMessages from './IndividualMessages';

function App() {
  return (
    <Routes>
      {/* Login is the first page */}
      <Route path="/" element={<EDLLogin />} />

      {/* CommHub landing page */}
      <Route path="/commhub" element={<CommHub />} />

      {/* Optional: Redirect any unknown path back to login */}
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/email-tool" element={<EmailTool />} />
      <Route path="/individual-messages" element={<IndividualMessages />} />
    </Routes>
  );
}

export default App;