type UserType = {
    [key: string]: { id: number, name: string }
}

// associative array
let people: UserType = {
    '101': { id: 101, name: 'Yana' },
    '100': { id: 100, name: 'Daniel' },
    '200': { id: 200, name: 'Lisa' },
    '300': { id: 300, name: 'Olive' }
}

beforeEach(() => {
    // Initialize users object before each test
    people = {
        '101': { id: 101, name: 'Yana' },
        '100': { id: 100, name: 'Daniel' },
        '200': { id: 200, name: 'Lisa' },
        '300': { id: 300, name: 'Olive' }
    }
});

test("should update corresponding user", () => {
    // Update the user's name
    people['101'].name = 'Yanni';

    // Check if the update was successful
    expect(people['101'].name).toBe('Yanni');
});
