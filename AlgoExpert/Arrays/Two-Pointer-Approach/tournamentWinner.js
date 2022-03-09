//! O(n) time | O(k) space , k is the number of teams
const HOME_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
	const scores = { [currentBestTeam] : 0};
	
	for(let i = 0; i < competitions.length; i++) {
		const result = results[i];
		const [homeTeam, awayTeam] = competitions[i];
		
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
		
		updateScores(winningTeam, 3, scores);
		
		if(scores[winningTeam] > scores[currentBestTeam]) {
			currentBestTeam = winningTeam;
		}
	}
	return currentBestTeam;
}

function updateScores(team, points, scores) {
	if( !(team in scores)) scores[team] = 0;
	
	scores[team] += points;
}