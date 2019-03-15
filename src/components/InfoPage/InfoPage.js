import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
   
      <table>
        <thead>
        <tr>
          <th>Description</th>
          <th>Image URL</th>
       
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
         
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
     
        </tr>
      </tbody>
      </table>
   
  </div>
);

export default InfoPage;
