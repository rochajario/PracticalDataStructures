<h1 align='center'>Singly Linked List</h1>
<h2 align='center'>Worst Case Time Complexity by Operation</h2>
<p align='center'>
    <table align='center'>
        <tr align='center'>
            <th>Operation Name</th>
            <th>Operation Type</th>
            <th>Description</th>
            <th>Worst Time Complexity</th>
        </tr>
        <tr align='center'>
            <td>Push</td>
            <td>Insertion</td>
            <td>Adds item to the collection end</td>
            <td>O(1)</td>
        </tr>
        <tr align='center'>
            <td>Unshift</td>
            <td>Insertion</td>
            <td>Adds item to the collection start</td>
            <td>O(1)</td>
        </tr>
        <tr align='center'>
            <td>Pop</td>
            <td>Deletion</td>
            <td>Adds item to the collection end</td>
            <td>O(n)</td>
        </tr>
        <tr align='center'>
            <td>Shift</td>
            <td>Deletion</td>
            <td>Adds item to the collection start</td>
            <td>O(1)</td>
        </tr>
        <tr align='center'>
            <td>Get</td>
            <td>Search</td>
            <td>Search item in the collection by index</td>
            <td>O(n)</td>
        </tr>
        <tr align='center'>
            <td>Set</td>
            <td>Search/Insert</td>
            <td>Search item in specific position and replace its value</td>
            <td>O(n)</td>
        </tr>
        <tr align='center'>
            <td>Insert</td>
            <td>Search/Insert</td>
            <td>Search item in specific position and set item as its next value, reference old next as item`s next.</td>
            <td>O(n)</td>
        </tr>
        <tr align='center'>
            <td>Remove</td>
            <td>Search/Remove</td>
            <td>Remove item in a specific position connection directly the two immediate neighbors.</td>
            <td>O(n)</td>
        </tr>
        <tr align='center'>
            <td>Remove</td>
            <td>Search/Insert</td>
            <td>Invert all items in a given collection.</td>
            <td>O(n)</td>
        </tr>
    </table>
</p>

## Operations Complexity Description

### Push:
> It has a time complexity of O(1) because it doesn`t need to iterate trought the links.

### Pop:
> Has a time complexty of O(n) because it has to search the last item linearly in order to remove the link and move the 'tail' pointer to the previous link.

### Get:
> Search items either by their indexes, returning their value. Has a time complexty of O(n) because it has to iterate each node linearly beginning from head until the requested item.

### Set:
> Search item in specific position and replace its value. Has a time complexty of O(n) because it has to iterate each node linearly beginning from head until the requested item and then replacing the value of requested node with O(1) time complexity. Removing non dominant operation we have O(n).

### Insert:
> Search item in specific position and then set as next of the previous one and set current position item as next. Has a time complexity of O(n) because it has to iterate each node linearly beggining from head until the requested index position.

### Remove:
> Remove item in a specific position connection directly the two immediate neighbors. Has a time complexity of O(n) because it has to iterate each node linearly beggining from head until the requested index position.

## Reverse:
> Invert all items in a given collection. Has a time complexity of O(n) because it has to iterate the whole collection linearly to reorder the nodes.