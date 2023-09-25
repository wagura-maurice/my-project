import { Module } from 'vuex';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  // Add more contact-related fields as needed
}

interface ContactsState {
  contacts: Contact[];
}

const contactsModule: Module<ContactsState, RootState> = {
  namespaced: true,

  state: {
    contacts: [],
  },

  mutations: {
    setContacts(state, contacts: Contact[]) {
      state.contacts = contacts;
    },

    addContact(state, contact: Contact) {
      state.contacts.push(contact);
    },

    updateContact(state, updatedContact: Contact) {
      const index = state.contacts.findIndex((c) => c.id === updatedContact.id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },

    deleteContact(state, contactId: number) {
      state.contacts = state.contacts.filter((c) => c.id !== contactId);
    },
  },

  actions: {
    fetchContacts({ commit }) {
      // Simulate fetching contacts from an API
      const contacts: Contact[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
        // Add more contacts as needed
      ];
      commit('setContacts', contacts);
    },

    addNewContact({ commit }, newContact: Contact) {
      // Simulate adding a new contact to the server or database
      // Then commit 'addContact' mutation with the new contact data
      commit('addContact', newContact);
    },

    updateExistingContact({ commit }, updatedContact: Contact) {
      // Simulate updating an existing contact on the server or database
      // Then commit 'updateContact' mutation with the updated contact data
      commit('updateContact', updatedContact);
    },

    deleteContactById({ commit }, contactId: number) {
      // Simulate deleting a contact from the server or database
      // Then commit 'deleteContact' mutation with the contact ID
      commit('deleteContact', contactId);
    },
  },

  getters: {
    getAllContacts: (state) => state.contacts,
  },
};

export default contactsModule;
