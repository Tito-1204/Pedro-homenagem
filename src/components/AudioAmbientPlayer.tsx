import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export const AudioAmbientPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<any>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Soothing chord frequencies in Hz (A major / D major serene meditative peaceful pad)
  const chords = [
    [220.00, 277.18, 329.63, 440.00], // A Major
    [293.66, 369.99, 440.00, 587.33], // D Major
    [246.94, 311.13, 369.99, 493.88], // B Minor
    [164.81, 246.94, 329.63, 493.88], // E Major
  ];

  const playChord = (chord: number[], ctx: AudioContext, masterGain: GainNode) => {
    chord.forEach((freq) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Subtle slow detune for warm chorus effect
      osc.detune.setValueAtTime(Math.random() * 8 - 4, ctx.currentTime);

      // Soft envelope (gentle attack, sustain, gentle release)
      noteGain.gain.setValueAtTime(0, ctx.currentTime);
      noteGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.8);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 5.5);

      osc.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 6.0);
    });
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
        const gainNode = audioCtxRef.current.createGain();
        gainNode.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
        gainNode.connect(audioCtxRef.current.destination);
        gainNodeRef.current = gainNode;
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const gain = gainNodeRef.current;

      if (ctx && gain) {
        let chordIndex = 0;
        playChord(chords[chordIndex], ctx, gain);
        chordIndex = (chordIndex + 1) % chords.length;

        intervalRef.current = setInterval(() => {
          if (ctx.state === 'running') {
            playChord(chords[chordIndex], ctx, gain);
            chordIndex = (chordIndex + 1) % chords.length;
          }
        }, 5000);
      }

      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/20 text-xs text-slate-300 shadow-md">
      <button
        onClick={togglePlay}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 font-medium ${
          isPlaying
            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-gold-sm'
            : 'hover:text-amber-400 hover:bg-slate-800 text-slate-400'
        }`}
        title={isPlaying ? 'Pausar melodia ambiente' : 'Ouvir melodia ambiente de reflexão'}
      >
        {isPlaying ? (
          <>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <Music className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            <span className="hidden sm:inline">Som Ambiente</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Melodia</span>
          </>
        )}
      </button>

      {isPlaying && (
        <div className="flex items-center gap-1.5 pl-1 pr-1">
          <input
            type="range"
            min="0"
            max="0.8"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-14 sm:w-20 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            aria-label="Volume do som ambiente"
          />
        </div>
      )}
    </div>
  );
};
