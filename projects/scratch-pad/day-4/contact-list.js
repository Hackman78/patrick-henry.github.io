// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Array 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

function makeContact(id, nameFirst, nameLast) {
    var contact = {};
contact.id = id;
contact.nameFirst = nameFirst;
contact.nameLast = nameLast;
    return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contactList = [];

    return {
        //create length function that returns array length
        length: function() {
            return contactList.length;
        },
        //create add contact funtion that adds contact to the contact list function
        addContact: function(contact) {
            contactList.push(contact);
        },
        //find function that looks thru array for fullname and returns the object in the array
        findContact: function(fullName) {
            return contactList.find(function(contact) {
                var fullNames = contact.nameFirst + ' ' + contact.nameLast;
                return fullNames === fullName;
            });
        },
        //removes a contact in a given index if contact fits contact discription
        removeContact: function(contact) {
            var i = contactList.findIndex(function(c) {
                return c === contact;
            });
            if (i !== -1) {
                contactList.splice(i, 1);
            }
        },
        //prints all contacts in contact list with full name and indents names to new lines with regexp
        printAllContactNames: function() {
            return contactList.map(function(contact) {
                return contact.nameFirst + ' ' + contact.nameLast;
            }).join('\n');
        }
    };
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
