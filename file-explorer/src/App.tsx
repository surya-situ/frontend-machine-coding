import { useState, FC } from 'react';

import explorer, { ExplorerItem } from './data/folderData';
import Folder from './components/Folder';

const App: FC = () => {

  const [explorerData, setExplorerData] = useState<ExplorerItem>(explorer);
  
  
  return (
    <>
      <Folder explorer={explorerData}/>
    </>
  )
}

export default App
