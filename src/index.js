import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './Time';
import './index.css';

const fileData = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file}/>
      ))}
    </tbody>
  </table>
);

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
    <td><Time time={file.updated_at} /></td>
  </tr>
);

const FileIcon = ({ file }) => {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder') {
    icon = 'fa-folder';
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`}/>
    </td>
  );
};

const FileName = ({ file }) => {
  return (
    <>
      <FileIcon file={file}/>
      <td className="file-name">
        {file.name}
      </td>
    </>
  );
}

const CommitMessage = ({ commit }) => (
  <td className="commit-message">
    {commit.message}
  </td>
);

FileList.propTypes = {
  files: PropTypes.array
};

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

FileName.propTypes = {
  file: PropTypes.object.isRequired
};

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

ReactDOM.render(<FileList files={fileData}/>,
  document.querySelector('#root'));
