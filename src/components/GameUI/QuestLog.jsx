import React from 'react';
import QuestCard from './QuestCard'; // CRITICAL: This imports the interactive card we built!

function QuestLog({ quests }) {
  return (
    <div className="quest-log-container">
      {quests.map(quest => (
        // This tells React to render our awesome popup card for every single quest in your data file
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
}

export default QuestLog;