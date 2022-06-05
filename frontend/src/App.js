import './App.css';
import React, {useState, useEffect} from 'react'

function ObsoleteToMetric(obsolete_time) {
  var metric_time = ''
  console.log(obsolete_time)

  var obs_hours = obsolete_time.getHours()
  var obs_mins = obsolete_time.getMinutes()
  var obs_secs = obsolete_time.getSeconds()

  var total_obs_seconds = obs_hours * 3600 + obs_mins * 60 + obs_secs
  var total_metric_seconds = 100000/86400 * total_obs_seconds
  total_metric_seconds = Math.round(total_metric_seconds)

  var metric_hours = Math.floor(total_metric_seconds/10000)
  var metric_minutes = Math.floor((total_metric_seconds - metric_hours * 10000)/100)
  var metric_seconds = (total_metric_seconds - metric_hours * 10000 - metric_minutes * 100)

  return metric_hours + ":" + metric_minutes + ":" + metric_seconds
}

function App() {
  var [date, setDate] = useState(ObsoleteToMetric((new Date())))

  useEffect(() => {
    var timer = setInterval(() => setDate(ObsoleteToMetric(new Date())), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  });

  return (
    <div className="App">
      <header className="App-header">
      <h3>The Current Metric Time is:</h3>
      <h1>¬{date}</h1>
      </header>
    </div>
  );
}

export default App;
