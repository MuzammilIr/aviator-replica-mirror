
import React, { useState, useEffect, useCallback } from 'react';
import { Plane, TrendingUp, Users, MessageCircle, Trophy, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GameState {
  multiplier: number;
  isFlying: boolean;
  crashed: boolean;
  gamePhase: 'waiting' | 'flying' | 'crashed';
}

interface Bet {
  amount: number;
  multiplier: number | null;
  cashedOut: boolean;
  profit: number;
}

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  avatar: string;
  timestamp: Date;
  type: 'message' | 'bet' | 'cashout';
}

const AviatorGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    multiplier: 1.00,
    isFlying: false,
    crashed: false,
    gamePhase: 'waiting'
  });

  const [bet, setBet] = useState<Bet>({
    amount: 100,
    multiplier: null,
    cashedOut: false,
    profit: 0
  });

  const [betAmount, setBetAmount] = useState('100');
  const [balance, setBalance] = useState(50000);
  const [gameHistory, setGameHistory] = useState<number[]>([2.5, 1.2, 5.6, 1.8, 3.2, 1.1, 4.5, 2.1]);
  const [countdown, setCountdown] = useState(0);
  
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      username: 'CryptoKing',
      message: 'Just won big! 🚀 Going for x10 next round',
      avatar: '👑',
      timestamp: new Date(),
      type: 'message'
    },
    {
      id: '2',
      username: 'AcePlayer',
      message: 'Cashed out at 2.5x, nice profit!',
      avatar: '🎯',
      timestamp: new Date(),
      type: 'cashout'
    },
    {
      id: '3',
      username: 'LuckyGamer',
      message: 'Anyone else betting big this round?',
      avatar: '🍀',
      timestamp: new Date(),
      type: 'message'
    },
    {
      id: '4',
      username: 'ProPlayer',
      message: 'Strategy is key! Never chase losses',
      avatar: '⭐',
      timestamp: new Date(),
      type: 'message'
    }
  ]);

  const [currentPlayers] = useState([
    { name: 'AviatorPro', bet: 500, multiplier: null, avatar: '🚀' },
    { name: 'WinMaster', bet: 1000, multiplier: 2.1, avatar: '💰' },
    { name: 'HighRoller', bet: 2500, multiplier: null, avatar: '💎' },
    { name: 'SpeedBetter', bet: 150, multiplier: 1.8, avatar: '⚡' },
    { name: 'CrashExpert', bet: 750, multiplier: null, avatar: '🎯' }
  ]);

  const startNewGame = useCallback(() => {
    setGameState({
      multiplier: 1.00,
      isFlying: false,
      crashed: false,
      gamePhase: 'waiting'
    });
    
    setBet(prev => ({
      ...prev,
      multiplier: null,
      cashedOut: false,
      profit: 0
    }));

    setCountdown(5);
    
    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          startFlight();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const startFlight = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      isFlying: true,
      gamePhase: 'flying'
    }));

    const crashPoint = Math.random() * 10 + 1;
    let currentMultiplier = 1.00;
    
    const gameTimer = setInterval(() => {
      currentMultiplier += Math.random() * 0.1 + 0.01;
      
      setGameState(prev => ({
        ...prev,
        multiplier: Math.round(currentMultiplier * 100) / 100
      }));

      if (currentMultiplier >= crashPoint) {
        clearInterval(gameTimer);
        crashPlane(currentMultiplier);
      }
    }, 100);
  }, []);

  const crashPlane = useCallback((finalMultiplier: number) => {
    setGameState(prev => ({
      ...prev,
      crashed: true,
      gamePhase: 'crashed',
      multiplier: Math.round(finalMultiplier * 100) / 100
    }));

    setGameHistory(prev => [Math.round(finalMultiplier * 100) / 100, ...prev.slice(0, 7)]);
    
    // Add crash message to chat
    setChatMessages(prev => [
      {
        id: Date.now().toString(),
        username: 'System',
        message: `🔥 Crashed at ${(Math.round(finalMultiplier * 100) / 100).toFixed(2)}x`,
        avatar: '⚠️',
        timestamp: new Date(),
        type: 'message'
      },
      ...prev.slice(0, 19)
    ]);

    setTimeout(() => {
      startNewGame();
    }, 3000);
  }, [startNewGame]);

  const placeBet = () => {
    const amount = parseInt(betAmount);
    if (amount > balance || amount < 1) return;
    
    setBalance(prev => prev - amount);
    setBet({
      amount,
      multiplier: null,
      cashedOut: false,
      profit: 0
    });

    // Add bet message to chat
    setChatMessages(prev => [
      {
        id: Date.now().toString(),
        username: 'You',
        message: `Placed bet: ₹${amount}`,
        avatar: '🎲',
        timestamp: new Date(),
        type: 'bet'
      },
      ...prev.slice(0, 19)
    ]);
  };

  const cashOut = () => {
    if (!gameState.isFlying || bet.cashedOut || bet.amount === 0) return;
    
    const profit = Math.round(bet.amount * gameState.multiplier);
    const netProfit = profit - bet.amount;
    
    setBalance(prev => prev + profit);
    setBet(prev => ({
      ...prev,
      multiplier: gameState.multiplier,
      cashedOut: true,
      profit: netProfit
    }));

    // Add cashout message to chat
    setChatMessages(prev => [
      {
        id: Date.now().toString(),
        username: 'You',
        message: `💰 Cashed out at ${gameState.multiplier.toFixed(2)}x! Profit: ₹${netProfit}`,
        avatar: '💰',
        timestamp: new Date(),
        type: 'cashout'
      },
      ...prev.slice(0, 19)
    ]);
  };

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const getMultiplierColor = () => {
    if (gameState.multiplier < 2) return 'text-green-400';
    if (gameState.multiplier < 5) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-aviator-dark text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-aviator-blue to-aviator-dark border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Plane className="h-8 w-8 text-aviator-yellow" />
            <h1 className="text-2xl font-bold text-aviator-yellow">AVIATOR</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Balance:</span>
              <span className="text-aviator-yellow font-bold text-lg">₹{balance.toLocaleString()}</span>
            </div>
            <Badge variant="secondary" className="bg-aviator-green text-white">
              <Users className="h-4 w-4 mr-1" />
              1,247 Online
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Game Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Game Display */}
          <Card className="bg-gradient-to-br from-aviator-darker to-aviator-blue border-gray-700 h-96 relative overflow-hidden">
            <CardContent className="p-0 h-full relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-grid-pattern"></div>
              </div>
              
              {/* Game Status */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Badge variant={gameState.gamePhase === 'flying' ? 'default' : 'secondary'} 
                         className={gameState.gamePhase === 'flying' ? 'bg-aviator-green animate-pulse' : 'bg-gray-600'}>
                    {gameState.gamePhase === 'waiting' && `Starting in ${countdown}s`}
                    {gameState.gamePhase === 'flying' && 'Flying...'}
                    {gameState.gamePhase === 'crashed' && 'Crashed!'}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">Round #{Math.floor(Math.random() * 10000)}</span>
                </div>
              </div>

              {/* Multiplier Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-8xl font-bold multiplier-text ${getMultiplierColor()} ${
                    gameState.isFlying ? 'animate-pulse-glow' : ''
                  } ${gameState.crashed ? 'animate-multiplier-grow' : ''}`}>
                    {gameState.multiplier.toFixed(2)}x
                  </div>
                  {gameState.crashed && (
                    <div className="text-red-400 text-2xl font-bold mt-4 animate-bounce">
                      🔥 CRASHED! 🔥
                    </div>
                  )}
                </div>
              </div>

              {/* Airplane */}
              <div className={`absolute bottom-10 left-10 transition-all duration-1000 ${
                gameState.crashed ? 'animate-fly-away' : 
                gameState.isFlying ? 'transform translate-x-20 -translate-y-10 rotate-12' : ''
              }`}>
                <Plane className={`h-12 w-12 ${gameState.crashed ? 'text-red-500' : 'text-aviator-yellow'}`} />
              </div>

              {/* Graph Lines */}
              <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
                <svg className="w-full h-full">
                  <path
                    d={`M 0,128 Q 100,${128 - gameState.multiplier * 10} 200,${128 - gameState.multiplier * 15} T 400,${128 - gameState.multiplier * 20}`}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-aviator-yellow"
                  />
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Betting Interface */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Place Bet</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Bet Amount (₹)</label>
                    <Input
                      type="number"
                      value={betAmount}
                      onChange={(e) => setBetAmount(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      min="1"
                      max={balance}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setBetAmount('100')}
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      ₹100
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setBetAmount('500')}
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      ₹500
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setBetAmount('1000')}
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      ₹1K
                    </Button>
                  </div>
                  <Button
                    onClick={placeBet}
                    disabled={gameState.gamePhase !== 'waiting' || bet.amount > 0}
                    className="w-full bet-button"
                  >
                    {bet.amount > 0 ? `Bet Placed: ₹${bet.amount}` : 'Place Bet'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Cash Out</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    {bet.amount > 0 && !bet.cashedOut && (
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-aviator-yellow">
                          ₹{Math.round(bet.amount * gameState.multiplier).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">
                          Potential Win ({gameState.multiplier.toFixed(2)}x)
                        </div>
                      </div>
                    )}
                    {bet.cashedOut && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-aviator-green">
                          ₹{(bet.amount + bet.profit).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">
                          Cashed out at {bet.multiplier?.toFixed(2)}x
                        </div>
                      </div>
                    )}
                    {bet.amount === 0 && (
                      <div className="text-gray-500">
                        Place a bet to enable cash out
                      </div>
                    )}
                  </div>
                  <Button
                    onClick={cashOut}
                    disabled={!gameState.isFlying || bet.cashedOut || bet.amount === 0}
                    className="w-full cashout-button"
                  >
                    {bet.cashedOut ? 'Cashed Out!' : 'Cash Out'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Game History */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-aviator-yellow" />
                Recent Games
              </h3>
              <div className="flex flex-wrap gap-2">
                {gameHistory.map((multiplier, index) => (
                  <Badge
                    key={index}
                    variant={multiplier >= 2 ? 'default' : 'secondary'}
                    className={`${
                      multiplier >= 10 ? 'bg-aviator-red' :
                      multiplier >= 5 ? 'bg-aviator-orange' :
                      multiplier >= 2 ? 'bg-aviator-green' :
                      'bg-gray-600'
                    } text-white font-bold`}
                  >
                    {multiplier.toFixed(2)}x
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Players */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-aviator-yellow" />
                Current Players
              </h3>
              <div className="space-y-3">
                {currentPlayers.map((player, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{player.avatar}</span>
                      <div>
                        <div className="font-medium">{player.name}</div>
                        <div className="text-sm text-gray-400">Bet: ₹{player.bet}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      {player.multiplier ? (
                        <div className="text-aviator-green font-bold">
                          {player.multiplier.toFixed(2)}x
                        </div>
                      ) : (
                        <div className="text-gray-400">-</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-gray-800/50 border-gray-700 h-full">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-semibold flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-aviator-yellow" />
                  Live Chat
                </h3>
              </div>
              
              <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-96">
                {chatMessages.map((message) => (
                  <div key={message.id} className="chat-message">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-lg">{message.avatar}</span>
                      <span className="text-sm font-medium text-aviator-yellow">
                        {message.username}
                      </span>
                      <span className="text-xs text-gray-500">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300 ml-6">
                      {message.message}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-700">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type a message..."
                    className="bg-gray-700 border-gray-600 text-white text-sm"
                  />
                  <Button size="sm" className="bg-aviator-blue hover:bg-aviator-blue/80">
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AviatorGame;
