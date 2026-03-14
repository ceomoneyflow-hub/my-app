/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  RotateCcw, 
  Play, 
  User, 
  Settings, 
  Clock, 
  Hash,
  Star,
  CheckCircle2,
  AlertCircle,
  Gamepad2,
  ChevronLeft,
  Award,
  Zap,
  Heart,
  Moon,
  Sun,
  Cloud,
  Flame,
  Anchor,
  Aperture,
  Archive,
  ArrowRight,
  BadgeCheck,
  Bell,
  Bike,
  Binary,
  Bird,
  Bluetooth,
  Bomb,
  Book,
  Bot,
  Box,
  Briefcase,
  Bug,
  Building,
  Bus,
  Cake,
  Calculator,
  Camera,
  Car,
  Cast,
  Cat,
  Chrome,
  Circle,
  Clipboard,
  CloudLightning,
  Coffee,
  Coins,
  Compass,
  Cpu,
  CreditCard,
  Crown,
  Database,
  Diamond,
  Dice5,
  Dog,
  Dribbble,
  Droplets,
  Drumstick,
  Dumbbell,
  Ear,
  Egg,
  Eye,
  Fan,
  Feather,
  FileText,
  Film,
  Fingerprint,
  Fish,
  Flag,
  FlaskConical,
  Flower,
  Folder,
  Footprints,
  Framer,
  Frown,
  Fuel,
  Ghost,
  Gift,
  GlassWater,
  Globe,
  Grip,
  Guitar,
  Hammer,
  Hand,
  HardDrive,
  Headphones,
  History,
  Home,
  IceCream,
  Image,
  Inbox,
  Infinity,
  Joystick,
  Key,
  Keyboard,
  Lamp,
  Laptop,
  Layers,
  Layout,
  Library,
  LifeBuoy,
  Lightbulb,
  LineChart,
  Link,
  List,
  Loader,
  Lock,
  Mail,
  Map,
  Mic,
  Microscope,
  Milestone,
  Monitor,
  Mountain,
  Mouse,
  Music,
  Navigation,
  Network,
  Newspaper,
  Package,
  Palette,
  Paperclip,
  Parentheses,
  PartyPopper,
  Pause,
  Pen,
  Phone,
  Piano,
  PieChart,
  PiggyBank,
  Pill,
  Pin,
  Plane,
  Plug,
  Plus,
  Pocket,
  Podcast,
  Power,
  Printer,
  Puzzle,
  QrCode,
  Quote,
  Radio,
  Receipt,
  Recycle,
  RefreshCw,
  Repeat,
  Rocket,
  Rss,
  Ruler,
  Save,
  Scale,
  Scan,
  Scissors,
  Search,
  Send,
  Server,
  Share2,
  Shield,
  Ship,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Shovel,
  Shuffle,
  Signal,
  Skull,
  Slack,
  Smartphone,
  Smile,
  Speaker,
  Sprout,
  Square,
  Stamp,
  Stethoscope,
  Sticker,
  StickyNote,
  Store,
  StretchHorizontal,
  StretchVertical,
  Subscript,
  SunMedium,
  Sunrise,
  Sunset,
  Superscript,
  Sword,
  Swords,
  Syringe,
  Table,
  Tablet,
  Tag,
  Tags,
  Target,
  Telescope,
  Tent,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  Timer,
  ToggleLeft,
  ToggleRight,
  Tornado,
  TrainFront,
  Trash2,
  TreeDeciduous,
  TreePine,
  Trees,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  Truck,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Undo,
  Unlink,
  Unlock,
  Upload,
  Usb,
  UserCheck,
  UserMinus,
  UserPlus,
  Users,
  Utensils,
  Variable,
  VenetianMask,
  Vibrate,
  Video,
  View,
  Voicemail,
  Volume2,
  Wallet,
  Wand2,
  Watch,
  Waves,
  Webcam,
  Webhook,
  Weight,
  Wheat,
  WholeWord,
  Wifi,
  Wind,
  Wine,
  Workflow,
  WrapText,
  Wrench,
  X,
  XCircle,
  Youtube,
  ZapOff,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { Difficulty, CardData, DIFFICULTY_CONFIG } from './types';

// Large list of icons to support Advanced difficulty (112 pairs)
const ALL_ICONS = [
  Star, Heart, Moon, Sun, Cloud, Flame, Anchor, Aperture, Archive, BadgeCheck,
  Bell, Bike, Binary, Bird, Bluetooth, Bomb, Book, Bot, Box, Briefcase, Bug,
  Building, Bus, Cake, Calculator, Camera, Car, Cast, Cat, Chrome, Circle,
  Clipboard, CloudLightning, Coffee, Coins, Compass, Cpu, CreditCard, Crown,
  Database, Diamond, Dice5, Dog, Dribbble, Droplets, Drumstick, Dumbbell, Ear,
  Egg, Eye, Fan, Feather, FileText, Film, Fingerprint, Fish, Flag, FlaskConical,
  Flower, Folder, Footprints, Framer, Frown, Fuel, Ghost, Gift, GlassWater,
  Globe, Grip, Guitar, Hammer, Hand, HardDrive, Headphones, History, Home,
  IceCream, Image, Inbox, Infinity, Joystick, Key, Keyboard, Lamp, Laptop,
  Layers, Layout, Library, LifeBuoy, Lightbulb, LineChart, Link, List, Loader,
  Lock, Mail, Map, Mic, Microscope, Milestone, Monitor, Mountain, Mouse, Music,
  Navigation, Network, Newspaper, Package, Palette, Paperclip, Parentheses,
  PartyPopper, Pause, Pen, Phone, Piano, PieChart, PiggyBank, Pill, Pin, Plane,
  Plug, Plus, Pocket, Podcast, Power, Printer, Puzzle, QrCode, Quote, Radio,
  Receipt, Recycle, RefreshCw, Repeat, Rocket, Rss, Ruler, Save, Scale, Scan,
  Scissors, Search, Send, Server, Share2, Shield, Ship, Shirt, ShoppingBag,
  ShoppingCart, Shovel, Shuffle, Signal, Skull, Slack, Smartphone, Smile,
  Speaker, Sprout, Square, Stamp, Stethoscope, Sticker, StickyNote, Store,
  StretchHorizontal, StretchVertical, Subscript, SunMedium, Sunrise, Sunset,
  Superscript, Sword, Swords, Syringe, Table, Tablet, Tag, Tags,
  Target, Telescope, Tent, Terminal, Thermometer, ThumbsDown, ThumbsUp, Ticket,
  Timer, ToggleLeft, ToggleRight, Tornado, TrainFront, Trash2, TreeDeciduous,
  TreePine, Trees, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv,
  Twitch, Twitter, Type, Umbrella, Underline, Undo, Unlink, Unlock, Upload,
  Usb, UserCheck, UserMinus, UserPlus, Users, Utensils, Variable, VenetianMask,
  Vibrate, Video, View, Voicemail, Volume2, Wallet, Wand2, Watch, Waves,
  Webcam, Webhook, Weight, Wheat, WholeWord, Wifi, Wind, Wine, Workflow,
  WrapText, Wrench, X, XCircle, Youtube, ZapOff, ZoomIn, ZoomOut
];

const COLORS = [
  'text-blue-500', 'text-red-500', 'text-green-500', 'text-yellow-500', 
  'text-purple-500', 'text-pink-500', 'text-indigo-500', 'text-orange-500',
  'text-teal-500', 'text-cyan-500', 'text-rose-500', 'text-emerald-500'
];

export default function App() {
  const [playerName, setPlayerName] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval: number;
    if (isGameStarted && !isGameOver && startTime) {
      interval = window.setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameStarted, isGameOver, startTime]);

  const initGame = useCallback((selectedDifficulty: Difficulty) => {
    const config = DIFFICULTY_CONFIG[selectedDifficulty];
    const totalCards = config.size * config.size;
    const isOdd = totalCards % 2 !== 0;
    const pairsCount = Math.floor(totalCards / 2);
    
    let gameCards: CardData[] = [];
    
    // Create pairs
    for (let i = 0; i < pairsCount; i++) {
      const iconId = i % ALL_ICONS.length;
      const color = COLORS[i % COLORS.length];
      const cardPair = [
        { id: i * 2, iconId, color, isFlipped: false, isMatched: false },
        { id: i * 2 + 1, iconId, color, isFlipped: false, isMatched: false }
      ];
      gameCards.push(...cardPair);
    }

    // Handle odd center card if necessary
    if (isOdd) {
      gameCards.push({
        id: totalCards - 1,
        iconId: -1, // Special bonus icon
        color: 'text-amber-500',
        isFlipped: false,
        isMatched: true, // Already "matched" or just a bonus
        isBonus: true
      });
    }

    // Shuffle
    gameCards = gameCards.sort(() => Math.random() - 0.5);

    setCards(gameCards);
    setDifficulty(selectedDifficulty);
    setMoves(0);
    setMatches(0);
    setIsGameOver(false);
    setIsGameStarted(true);
    setStartTime(Date.now());
    setElapsedTime(0);
    setFlippedIndices([]);
  }, []);

  const handleCardClick = (index: number) => {
    if (
      flippedIndices.length === 2 || 
      cards[index].isFlipped || 
      cards[index].isMatched || 
      cards[index].isBonus
    ) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);
      const [first, second] = newFlipped;
      
      if (cards[first].iconId === cards[second].iconId) {
        // Match found
        setTimeout(() => {
          setCards(prev => {
            const updated = [...prev];
            updated[first].isMatched = true;
            updated[second].isMatched = true;
            return updated;
          });
          setMatches(prev => {
            const newMatches = prev + 1;
            const totalPairs = Math.floor(cards.length / 2);
            if (newMatches === totalPairs) {
              setIsGameOver(true);
            }
            return newMatches;
          });
          setFlippedIndices([]);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => {
            const updated = [...prev];
            updated[first].isFlipped = false;
            updated[second].isFlipped = false;
            return updated;
          });
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  const calculateRank = useMemo(() => {
    if (!difficulty) return 'C';
    const totalPairs = Math.floor(cards.length / 2);
    const perfectMoves = totalPairs;
    const ratio = moves / perfectMoves;

    if (ratio <= 1.5) return 'S';
    if (ratio <= 2.2) return 'A';
    if (ratio <= 3.0) return 'B';
    return 'C';
  }, [moves, cards.length, difficulty]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isGameStarted) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center p-6 font-serif">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-[32px] shadow-xl p-10 border border-black/5"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-50 rounded-full mb-6">
              <Gamepad2 className="w-10 h-10 text-amber-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">카드 뒤집기 마스터</h1>
            <p className="text-gray-500 italic">당신의 기억력을 테스트해보세요</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">플레이어 이름</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="이름을 입력하세요"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">난이도 선택</label>
              <div className="grid grid-cols-3 gap-3">
                {(Object.keys(DIFFICULTY_CONFIG) as Difficulty[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`py-4 rounded-2xl text-sm font-bold transition-all border-2 ${
                      difficulty === level 
                        ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-200' 
                        : 'bg-white border-gray-100 text-gray-600 hover:border-amber-200'
                    }`}
                  >
                    {DIFFICULTY_CONFIG[level].label}
                    <div className="text-[10px] opacity-60 font-normal mt-1">
                      {DIFFICULTY_CONFIG[level].size}x{DIFFICULTY_CONFIG[level].size}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={!playerName || !difficulty}
              onClick={() => difficulty && initGame(difficulty)}
              className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all disabled:opacity-30 disabled:cursor-not-allowed mt-4 shadow-xl shadow-gray-200"
            >
              <Play className="w-5 h-5 fill-current" />
              게임 시작하기
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const gridSize = DIFFICULTY_CONFIG[difficulty!].size;

  return (
    <div className="min-h-screen bg-[#F5F5F0] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <button 
            onClick={() => setIsGameStarted(false)}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            나가기
          </button>

          <div className="flex items-center gap-6 bg-white px-6 py-3 rounded-2xl shadow-sm border border-black/5">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-amber-600" />
              <span className="font-bold text-gray-900">{playerName}</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 text-blue-600" />
              <span className="text-gray-500 text-sm">시도:</span>
              <span className="font-bold text-gray-900">{moves}</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="text-gray-500 text-sm">시간:</span>
              <span className="font-bold text-gray-900">{formatTime(elapsedTime)}</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-gray-500 text-sm">등급:</span>
              <span className={`font-black text-lg ${
                calculateRank === 'S' ? 'text-amber-500' :
                calculateRank === 'A' ? 'text-blue-500' :
                calculateRank === 'B' ? 'text-emerald-500' : 'text-gray-400'
              }`}>{calculateRank}</span>
            </div>
          </div>

          <button 
            onClick={() => initGame(difficulty!)}
            className="p-3 bg-white text-gray-600 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm border border-black/5"
            title="다시 시작"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Game Board */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div 
            className="grid gap-2 md:gap-3 w-full aspect-square"
            style={{ 
              gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
              maxWidth: difficulty === 'Beginner' ? '627px' : '538px'
            }}
          >
            {cards.map((card, idx) => {
              const IconComponent = card.iconId === -1 ? Star : ALL_ICONS[card.iconId];
              
              return (
                <div 
                  key={idx} 
                  className="relative perspective-1000 w-full h-full cursor-pointer"
                  onClick={() => handleCardClick(idx)}
                >
                  <motion.div
                    animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-full h-full relative preserve-3d"
                  >
                    {/* Front (Hidden) */}
                    <div className="absolute inset-0 backface-hidden bg-white rounded-lg md:rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
                      <div className="w-1/3 h-1/3 bg-gray-100 rounded-full opacity-50" />
                    </div>

                    {/* Back (Visible) */}
                    <div 
                      className={`absolute inset-0 backface-hidden rotate-y-180 rounded-lg md:rounded-xl shadow-md flex items-center justify-center transition-opacity duration-500 ${
                        card.isMatched ? 'bg-gray-50 opacity-40' : 'bg-white'
                      }`}
                    >
                      {card.isBonus ? (
                        <Star className="w-1/2 h-1/2 text-amber-500 fill-amber-500" />
                      ) : (
                        <IconComponent className={`w-1/2 h-1/2 ${card.color}`} />
                      )}
                      
                      {card.isMatched && !card.isBonus && (
                        <div className="absolute top-1 right-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Game Over Modal */}
      <AnimatePresence>
        {isGameOver && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="bg-white rounded-[40px] max-w-md w-full p-10 text-center shadow-2xl"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 animate-ping bg-amber-400 rounded-full opacity-20" />
                <div className="relative bg-amber-100 p-6 rounded-full">
                  <Trophy className="w-12 h-12 text-amber-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">참 잘했어요!</h2>
              <p className="text-gray-500 mb-8 italic">{playerName}님의 기록입니다.</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-3xl">
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">최종 등급</div>
                  <div className={`text-4xl font-black ${
                    calculateRank === 'S' ? 'text-amber-500' :
                    calculateRank === 'A' ? 'text-blue-500' :
                    calculateRank === 'B' ? 'text-emerald-500' : 'text-gray-400'
                  }`}>{calculateRank}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-3xl">
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">소요 시간</div>
                  <div className="text-2xl font-bold text-gray-900">{formatTime(elapsedTime)}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-3xl col-span-2">
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">총 뒤집은 횟수</div>
                  <div className="text-2xl font-bold text-gray-900">{moves}회</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setIsGameStarted(false)}
                  className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                >
                  메인으로
                </button>
                <button 
                  onClick={() => initGame(difficulty!)}
                  className="flex-[2] py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-gray-200"
                >
                  다시 도전하기
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
