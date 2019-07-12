// render() {
//     return (
//       <div className="App">
//         <header className="header">
//           <h1 className="headerTitle">Harry Potter Memory Game</h1>
//           <p className="headerText">
//             Click on a picture below but be careful not to click the same picture twice!
//           </p>
//           <Points total={this.state.points}
//           goal={6}
//           status={this.state.status}
//         />
//         </header>
        
//         <Wrapper>
//           {this.state.images.map(image => (
//             <Card
//               shuffleCard={this.shuffleCard}
//               id={image.id}
//               key={image.id}
//               image={image.image}
//             />
//           ))}
//         </Wrapper>

//       </div>
//     );
//   }
// }

// export default App;