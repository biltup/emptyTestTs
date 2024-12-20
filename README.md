# emptyTestTs
A test for candidates to make sure their environment is setup properly.  Your output should look like below after running command

```
npm run test-a
```

# Test Output

bash
deanhiller@Deans-MacBook-Pro emptyTestTs % npm run test-a

\>userservicets@1.0.0 test-a  
\>jest tests/a.test.ts

  console.log
    **Run before every test**

&nbsp; &nbsp; &nbsp;at Object.<anonymous> (tests/a.test.ts:6:17)

  console.log
    **Test RUNNING & WORKING**

&nbsp; &nbsp; &nbsp;at MyApp.testLog (src/impl/myApp.ts:4:17)

 **PASS**  tests/a.test.ts  
 &nbsp; &nbsp;   UserService Tests  
 &nbsp; &nbsp; &nbsp; &nbsp; ✓ some test description (7 ms)  

Test Suites: 1 passed, 1 total  
Tests:       1 passed, 1 total  
Snapshots:   0 total  
Time:        0.575 s  
Ran all test suites matching `/tests\/a.test.ts/i`.