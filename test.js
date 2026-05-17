describe("pow", function() {
    // before(() => alert("Testing started – before all tests"));
    // after(() => alert("Testing finished – after all tests"));
    it("2 raises to 3-th power", function() {
      assert.equal(pow(2, 3), 8);
      
    });
    it("9 raises to 0-th power", function() {
        assert.equal(pow(9, 0), 1);
        
      });
    it("3 raises to 4-th power", function() {
      assert.equal(pow(3, 4), 81);
    });
    it("3 raises to 3-th power", function() {
        assert.equal(pow(3, 3), 27);
      });
      
      /* Gererating tests using a function*/
      function makeTest(x){
        let expected = x * x * x;
        it(`${x} raised to the 3rd power ${expected}`, function() {
            assert.equal(pow(x,3), expected);
        });
      }
      for(let x = 1;x<12;++x) {
        makeTest(x);
      }
  });
/*
  describe("pow", function() {

    describe("raises x to power 3", function() {
  
      function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
        });
      }
  
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
      }
  
    });
  
    // ... more tests to follow here, both describe and it can be added
  });

  */