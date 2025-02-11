// styles.js
import { StyleSheet } from 'react-native';
import { Colors, Spacing } from './constants';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.medium,
    backgroundColor: Colors.primary,
  },
  titleText: {
    fontSize: 20,
    color: Colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
  