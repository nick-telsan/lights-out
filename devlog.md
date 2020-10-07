# Devlog

## Goal (MVP - Lights Off)
Create an implementation of Lights Out using React
- [X] The game should display a 5x5 grid of tiles that can be in an "on/lit" or "off/unlit" state.
- [X] The game should start in a random state (some tiles on, some off).
- [X] Clicking a tile should toggle the tile + all adjacent tiles.
- [ ] The game should track and display the total number of moves.
- [ ] The game should have a "restart" button which resets the move count to zero and the game to a random state.
- [ ] If the user is able to turn off all of the lights, the game should display a success message with the option to restart the game.
- [ ] There should be test coverage for each component.

## Stretch Goal (v1.1 - Lights On)
Improvements to the MVP
- [ ] Styled components with better CSS (preferably using custom components, but might need some pre-styled components for quickness)
- [ ] Lights On game mode (win condition is get every light on)
- [ ] Custom board sizes
- [ ] Crazy Mode (flipping a light changes a few random lights) (if possible - I'm worried this may be "unbeatable" without some trickery)


## Super Stretch Goal (v1.2 - Lights Alive)
Bring the bad boy online!
- [ ] Auth0 Login to save scores
- [ ] MongoDB implentation to save scores
- [ ] GraphQL API (client and server)
- [ ] Leaderboard
- [ ] Hosted at lights-out.telsanstudios.com (or maybe nicktelsan.com/lights-out)