import React, { useState } from 'react';
import './MobileApp.css';

const CONTACTS = [
  { name: 'Arjuns ', number: '9283746501' },
  { name: 'Tom ', number: '1029837465' },
  { name: 'Niharika Dewidi', number: '7465382937'},
  { name: 'Arjuns Kumar', number: '938475123' },
  { name: 'Jonny', number: '465836485' },
  { name: 'Mark', number: '945768393' },
  { name: 'Arjuns Roy', number: '384761239' },
  { name: 'Arjuns Srivas', number: '384761239' },
  { name: 'Thoms Drecrusa', number: '8453629293' },
  
];

const MobileApp = () => {
  const [searchText, setSearchText] = useState('');
  const [selectContact, setSelectContact] = useState(null);

  const handleSearch = click => {
    setSearchText(click.target.value);
  };

  const handleContactClick = contact => {
    setSelectContact(contact);
  };

  const filteredContacts = CONTACTS.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handlePopupClose = () => {
    setSelectContact(null);
  };
  const handleReset = () => {
    setSearchText('');
    setSelectContact(null);
  };

  return (
    <div className='full-body'>
      <h1>Search Contacts</h1>
      <div className='searchTag'> 
      <input type="text" placeholder="Search contacts..." value={searchText} onChange={handleSearch} />
      <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <ul className='list'>
        {filteredContacts.map(contacts => (
          <li key={contacts.name} onClick={() => handleContactClick(contacts)}>
            {contacts.name}
          </li>
        ))}
      </ul>

      {selectContact && (
        <div className='selectedContact'>
          <h3>{selectContact.name}</h3>
          <p>{selectContact.number}</p>
          <button className="button" onClick={handlePopupClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileApp;
