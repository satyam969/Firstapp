// search.jsx
import React, { Component, useState } from 'react'
import { ScrollViewComponent, Text, TextInput, View } from 'react-native'


 const search=()=> {
    const [search,setSearch]=useState('')
    return (
      <View>
        <Text> Search Component </Text>
        {/* Add search functionality */}
        <TextInput
        value={search}
        onChangeText={setSearch}
        >

        </TextInput>
        {/* Implement search bar */}

        <ScrollView>
            {/* Display search results */}

<View>
    <Text>
        Search Result 1
    </Text>
</View>
<View>
    <Text>
        Search Result 2
    </Text>
</View>


            {/* Add loading state */}
            {/* Add error handling */}
            {/* Add pagination */}
        </ScrollView>

        {/* Implement search results */}
        {/* Implement pagination */}
        <Text> textInComponent </Text>
      </View>
    )
  }


export default search
