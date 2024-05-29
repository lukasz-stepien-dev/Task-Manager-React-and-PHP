import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TaskList from './components/tasks/TaskList';
import AddTask from './components/tasks/AddTask';
import EditTask from './components/tasks/EditTask';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/tasks" component={TaskList} />
          <Route path="/add-task" component={AddTask} />
          <Route path="/edit-task/:id" component={EditTask} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Routes>
      </Router>
  );
}

export default App;
