import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * HeroSection — Cachoeira de São Tomé das Letras como fundo em vídeo.
 *
 * Lógica do loop customizado (4:03 → 5:04 → volta para 4:03):
 *   O parâmetro `loop` do YouTube reinicia do início do vídeo, não
 *   do `start`. A solução correta é usar a YouTube IFrame Player API:
 *   1. Carrega o script da API dinamicamente (client-side only)
 *   2. Cria um YT.Player apontando para a div#hero-yt-player
 *   3. No evento onStateChange, quando state = ENDED (0),
 *      chama seekTo(243) + playVideo() → loop perfeito no trecho certo
 */
const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const START_TIME = 243; // 4:03
    const END_TIME   = 304; // 5:04

    // Carrega o script da YouTube IFrame API (só uma vez por página)
    if (!document.getElementById('yt-iframe-api')) {
      const script = document.createElement('script');
      script.id  = 'yt-iframe-api';
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    }

    const createPlayer = () => {
      playerRef.current = new (window as any).YT.Player('hero-yt-player', {
        videoId: 'NPIVusuIo5o',
        playerVars: {
          autoplay:       1,
          mute:           1,
          controls:       0,
          showinfo:       0,
          rel:            0,
          disablekb:      1,
          modestbranding: 1,
          iv_load_policy: 3,
          start:          START_TIME,
          end:            END_TIME,
        },
        events: {
          onStateChange: (event: any) => {
            // ENDED (0) → volta para 4:03 e continua tocando
            if (event.data === 0) {
              playerRef.current.seekTo(START_TIME, true);
              playerRef.current.playVideo();
            }
          },
        },
      });
    };

    // API já carregada? Cria o player direto. Caso contrário, aguarda callback.
    if ((window as any).YT?.Player) {
      createPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isMounted]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">

      {/* ── Fundo: imagem estática (SSR-safe + fallback) ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />

        {/* div que a API converte em iframe após mount */}
        {isMounted && (
          <div
            id="hero-yt-player"
            className="absolute pointer-events-none"
            style={{
              width:  '320%',
              height: '320%',
              top:    '-110%',
              left:   '-110%',
            }}
          />
        )}

        {/* Overlays para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-mineiro-dark/90 via-transparent to-transparent z-10" />
      </div>

      {/* ── Conteúdo ── */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-2xl text-white">

          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-mineiro-gold/20 border border-mineiro-gold/40 backdrop-blur-sm">
            <span className="text-mineiro-gold text-xs font-bold tracking-widest uppercase">
              Tradição &amp; Requinte
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-[1.08]">
            Do <span className="text-mineiro-gold italic">Fogo de Lenha</span>{' '}
            <br />
            Para Sua Mesa
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-lg leading-relaxed">
            Experimente a verdadeira essência da culinária mineira.
            Receitas centenárias preparadas com técnicas contemporâneas
            para o seu paladar exigente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/cardapio"
              className="px-8 py-4 bg-mineiro-gold hover:bg-yellow-500 text-mineiro-dark font-bold rounded-lg transition-all transform hover:scale-105 text-center shadow-lg shadow-mineiro-gold/30"
            >
              FAZER PEDIDO AGORA
            </Link>
            <Link
              href="/sobre"
              className="px-8 py-4 border-2 border-white/40 hover:border-mineiro-gold hover:text-mineiro-gold text-white font-bold rounded-lg transition-all text-center backdrop-blur-sm"
            >
              NOSSA HISTÓRIA
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[11, 12, 13, 14].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-mineiro-gold overflow-hidden bg-gray-300"
                >
                  <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Cliente satisfeito" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-0.5 text-mineiro-gold mb-1">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-white/60">Mais de 2.500 pedidos servidos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-mineiro-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
