/**
 * There is an array, each item has such format:
 * {firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: 'xxx'}
 * lastName, note can be empty, customerID can only be a set of digital numbers.
 * profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
 */

/**
 * Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
 */
function sortUserName(users) {
  return users.sort((a, b) => {
    const nameA = `${a.firstName}${a.lastName}${a.customerID}`;
    const nameB = `${b.firstName}${b.lastName}${b.customerID}`;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}

/**
 * Q2. Please sort by ‘profession’ to follow the principle.
 * (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’)
 */
function sortByType(users) {
  const professionOrder = {
    'systemAnalytics': 1,
    'engineer': 2,
    'productOwner': 3,
    'freelancer': 4,
    'student': 5
  };

  return users.sort((a, b) => {
    return professionOrder[a.profession] - professionOrder[b.profession];
  });
}

// Example usage
const users = [
  { firstName: 'John', lastName: 'Doe', customerID: '123', note: '', profession: 'engineer' },
  { firstName: 'Jane', lastName: 'Smith', customerID: '456', note: '', profession: 'student' },
  { firstName: 'Alice', lastName: 'Johnson', customerID: '789', note: '', profession: 'systemAnalytics' },
  { firstName: 'Bob', lastName: 'Brown', customerID: '101', note: '', profession: 'freelancer' },
  { firstName: 'Charlie', lastName: 'Davis', customerID: '102', note: '', profession: 'productOwner' }
];

console.log('Sorted by User Name:');
console.log(sortUserName(users));

console.log('Sorted by Profession:');
console.log(sortByType(users));
