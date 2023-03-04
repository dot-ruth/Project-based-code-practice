const functions = require('./functions');
test('the output should be 4',()=>{
  expect(functions.add(2,2)).toBe(4);
})

test('the output should not be 5',()=>{
    expect(functions.add(2,2)).not.toBe(5);
  })

  test('This Should be Null',()=>{
    expect(functions.isNull()).toBeNull();
  })

  test('This Should be Falsy',()=>{
    expect(functions.checkValue(null)).toBeFalsy();
  })

  test('user should be Ruth Abiti',()=>{
    expect(functions.createUser()).toEqual({firstName:'Ruth',lastName:'Abiti'});
  })

  test('should be less than 1000',()=>{
    const load = 800;
    expect(load).toBeLessThan(1000);
    // there is also toBeLessThanOrEqual() and toBeGreaterThan()
  })

  //regex
  test('There is no i in team',()=>{
    expect('team').not.toMatch(/I/);
  })

  //Arrays
  test('Ruth should be in the list of username',()=>{
    username = ['ruth','ruth A','ruti'];
    expect(username).toContain('ruth');
  })

  //working with async data

  //promise
  test('users fetched name should be leanne Graham',()=>{
    expect.assertions(1);
    return functions.fetchUser()
    .then(data=>{
        expect(data.name).toEqual('Leanne Graham')
    })
  })

  //Async-Await
  test('users fetched name should be leanne Graham',async ()=>{
    expect.assertions(1);
     const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham')
  })