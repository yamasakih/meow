'use client'

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type TrainingTask = {
  id: number;
  text: string;
  completed: boolean;
};

const initialTasks: TrainingTask[] = [
  { id: 1, text: '「正しい姿勢」って言おう！', completed: false },
  { id: 2, text: 'マウスピースを1時間つけよう！', completed: false },
  { id: 3, text: 'お腹で大きく息をして、3分間練習しよう！', completed: false },
];

export default function DailyTraining() {
  const [tasks, setTasks] = useState<TrainingTask[]>(initialTasks);

  const toggleTaskCompletion = (id: number) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col min-h-screen bg-custom-light-gray">
      <Header />

      <main className="flex-grow">
        <div className="text-center p-6 bg-white">
          <h1 className="text-3xl font-bold text-custom-light-blue mt-4">今日のトレーニング</h1>
          <ul className="space-y-4 mt-6">
            {tasks.map(task => (
              <li key={task.id} className="bg-white p-4 rounded-lg shadow-lg">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="form-checkbox h-5 w-5"
                  />
                  <span className={`text-lg ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
