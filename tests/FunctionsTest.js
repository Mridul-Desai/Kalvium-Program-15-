describe('Bucket List Application', function() {


  it('should add an item to the bucket list when add button is clicked', function() {
      // Simulate user input
      document.getElementById("input-field").value = 'Learn Jasmine';

      // Call the addValues function
      addValues();

      // Check that the item was added to the bucket list
      expect(bucketList.length).toBe(1);
      expect(bucketList[0]).toBe('Learn Jasmine');

      // Check that the list item is displayed in the container
      expect(listItem.children.length).toBe(1);
      expect(listItem.children[0].textContent).toContain('Learn Jasmine');
  });

  it('should remove an item from the bucket list when remove is clicked', function() {
      // Add two items
      bucketList = ['Learn Jasmine', 'Practice JavaScript'];
      showList();

      // Simulate removing the first item
      remove(0);

      // Check that the first item was removed
      expect(bucketList.length).toBe(1);
      expect(bucketList[0]).toBe('Practice JavaScript');

      // Check that the remaining item is displayed
      expect(listItem.children.length).toBe(1);
      expect(listItem.children[0].textContent).toContain('Practice JavaScript');
  });

  it('should reset the bucket list when reset button is clicked', function() {
      // Add items to the bucket list
      bucketList = ['Learn Jasmine', 'Practice JavaScript'];
      showList();

      // Call the reset function
      reset();

      // Check that the bucket list is empty
      expect(bucketList.length).toBe(0);

      // Check that the list container is cleared
      expect(listItem.children.length).toBe(0);
  });
});
