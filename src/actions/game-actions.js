export const gameActionConst = {
    PLAY_GAME_EMBED: '@GAME/PLAY_GAME_EMBED',
};

export const playGameEmbed = (gameData) => {
    return {
        type: gameActionConst.PLAY_GAME_EMBED,
        gameData,
    };
};
