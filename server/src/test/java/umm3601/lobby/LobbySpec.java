package umm3601.lobby;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LobbySpec {

  private static final String FAKE_ID_STRING_1 = "fakeIdOne";
  private static final String FAKE_ID_STRING_2 = "fakeIdTwo";

  private Lobby lobby1;
  private Lobby lobby2;

  @BeforeEach
  void setupEach() {
    lobby1 = new Lobby();
    lobby2 = new Lobby();
  }

  @Test
  void lobbiesWithEqualIdAreEqual() {
    lobby1._id = FAKE_ID_STRING_1;
    lobby2._id = FAKE_ID_STRING_1;

    assertTrue(lobby1.equals(lobby2));
  }

  @Test
  void lobbiesWithDifferentIdAreNotEqual() {
    lobby1._id = FAKE_ID_STRING_1;
    lobby2._id = FAKE_ID_STRING_2;

    assertFalse(lobby1.equals(lobby2));
  }

  @Test
  void hashCodesAreBasedOnId() {
    lobby1._id = FAKE_ID_STRING_1;
    lobby2._id = FAKE_ID_STRING_1;

    assertTrue(lobby1.hashCode() == lobby2.hashCode());
  }

  @SuppressWarnings("unlikely-arg-type")
  @Test
  void lobbiesAreNotEqualToOtherKindsOfThings() {
    lobby1._id = FAKE_ID_STRING_1;
    // a lobby is not equal to its id even though id is used for checking equality
    assertFalse(lobby1.equals(FAKE_ID_STRING_1));
  }
}
