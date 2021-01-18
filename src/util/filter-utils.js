
// const getFilterOptions = () => {
//   const domCheckboxes = document.querySelectorAll (
//     '.experiment-form input[type=checkbox]'
//   );
//   const checkboxes = Array.from (domCheckboxes);

//   const filterElements = [];
//   const filterReactions = [];
//   const filterWeapons = [];

//   checkboxes.forEach (checkbox => {
//     if (checkbox.checked) {
//       if (checkbox.dataset.ctg === 'element') {
//         filterElements.push (checkbox.dataset.val);
//       } else if (checkbox.dataset.ctg === 'reaction') {
//         filterReactions.push (checkbox.dataset.val);
//       } else if (checkbox.dataset.ctg === 'weapon') {
//         filterWeapons.push (checkbox.dataset.val);
//       }
//     }
//   });

//   return {
//     elements: filterElements,
//     weapons: filterWeapons,
//   };
// };

// export {
//   getFilterOptions,
// }
