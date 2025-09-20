import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { ContactInfo, Special } from '../types';

const AdminPage: React.FC = () => {
    const { state, setState } = useAppContext();
    const [contact, setContact] = useState<ContactInfo>(state.contactInfo);
    const [about, setAbout] = useState<string>(state.aboutContent);
    const [specials, setSpecials] = useState<Special[]>(state.specials);
    const [newSpecial, setNewSpecial] = useState({ title: '', description: '', imageUrl: 'https://picsum.photos/seed/new-special/400/300' });
    const [savedMessage, setSavedMessage] = useState<string | null>(null);

    const handleSaveChanges = () => {
        setState({
            contactInfo: contact,
            aboutContent: about,
            specials: specials,
        });
        setSavedMessage('Changes saved successfully! (Changes will reset on page refresh)');
        setTimeout(() => setSavedMessage(null), 5000);
    };
    
    const handleAddSpecial = () => {
        if (!newSpecial.title || !newSpecial.description) {
            alert('Please fill in title and description for the new special.');
            return;
        }
        const specialToAdd: Special = { ...newSpecial, id: Date.now() };
        setSpecials([...specials, specialToAdd]);
        setNewSpecial({ title: '', description: '', imageUrl: 'https://picsum.photos/seed/new-special/400/300' });
    };
    
    const handleRemoveSpecial = (id: number) => {
        setSpecials(specials.filter(s => s.id !== id));
    };

    return (
        <div className="space-y-8 p-4 bg-gray-50 rounded-lg shadow-inner">
            <div className="text-center border-b pb-4">
                <h2 className="text-3xl font-bold text-gray-800">Admin Panel</h2>
                <p className="text-sm text-red-600 mt-2">NOTE: Changes made here are for demonstration and will reset on page refresh.</p>
            </div>
            
            {savedMessage && (
                 <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                    <p>{savedMessage}</p>
                </div>
            )}

            {/* Manage Specials */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Manage Specials</h3>
                {specials.map((special, index) => (
                    <div key={special.id} className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
                        <span>{index + 1}. {special.title}</span>
                        <button onClick={() => handleRemoveSpecial(special.id)} className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600">Remove</button>
                    </div>
                ))}
                 <div className="bg-white p-4 rounded shadow-sm space-y-3">
                    <h4 className="font-medium">Add New Special</h4>
                    <input type="text" placeholder="Title" value={newSpecial.title} onChange={e => setNewSpecial({...newSpecial, title: e.target.value})} className="w-full p-2 border rounded"/>
                    <input type="text" placeholder="Description" value={newSpecial.description} onChange={e => setNewSpecial({...newSpecial, description: e.target.value})} className="w-full p-2 border rounded"/>
                    <button onClick={handleAddSpecial} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Special</button>
                </div>
            </div>

            {/* Edit Contact Info */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Edit Contact Info</h3>
                <div className="bg-white p-4 rounded shadow-sm space-y-3">
                    <div>
                        <label className="block text-sm font-medium">Address</label>
                        <input type="text" value={contact.address} onChange={e => setContact({...contact, address: e.target.value})} className="w-full p-2 border rounded"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Phone</label>
                        <input type="text" value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})} className="w-full p-2 border rounded"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} className="w-full p-2 border rounded"/>
                    </div>
                </div>
            </div>

            {/* Edit About Page Content */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Edit About Page Content</h3>
                 <div className="bg-white p-4 rounded shadow-sm">
                    <textarea value={about} onChange={e => setAbout(e.target.value)} rows={10} className="w-full p-2 border rounded"></textarea>
                    <p className="text-xs text-gray-500 mt-1">HTML tags can be used for formatting.</p>
                </div>
            </div>

            <button onClick={handleSaveChanges} className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors text-lg">
                Save All Changes
            </button>
        </div>
    );
};

export default AdminPage;
