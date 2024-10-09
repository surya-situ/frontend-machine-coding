import { FC, useState } from 'react';
import { ExplorerItem } from '../data/folderData'; 


interface FolderProps {
    explorer: ExplorerItem;
}

const Folder: FC<FolderProps> = ({ explorer }) => {
    
    const [expand, setExpand] = useState(false);

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div
                    className='folder'
                    onClick={() => setExpand(!expand)}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                    {expand ? '📂' : '📁'} {explorer.name}
                </div>

                {expand && explorer.items.length > 0 && (
                    <div style={{ paddingLeft: 25 }}>
                        {explorer.items.map((item: ExplorerItem) => (
                            <Folder explorer={item} key={item.id} />
                        ))}
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div className='file' style={{ paddingLeft: 20 }}>
                📄 {explorer.name}
            </div>
        );
    }
};

export default Folder;
