# Contexto para Loading Skeletons

## Visão Geral dos Loading Skeletons

Os loading skeletons são elementos visuais temporários exibidos enquanto o conteúdo real está sendo carregado. Eles melhoram significativamente a experiência do usuário ao:

- Reduzir a percepção de tempo de espera
- Prevenir mudanças bruscas no layout (layout shifts)
- Indicar claramente que o conteúdo está sendo carregado
- Manter a estrutura visual da página consistente

## Implementação Base de um Skeleton

```tsx
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-slate-900/10 dark:bg-slate-50/10", className)} {...props} />;
}
```

## Padrões de Uso

### 1. Componentes Skeleton Específicos

Para cada componente complexo da aplicação, crie um skeleton correspondente que imita sua estrutura visual:

```tsx
export const MainBannerSkeleton = () => {
  return (
    <section className="flex flex-col md:grid grid-cols-5 gap-12 w-full items-start">
      <div className="flex flex-col gap-8 py-[6.375rem] px-12 rounded-ee-[9.25rem] col-span-3 bg-muted">
        {/* Título */}
        <Skeleton className="h-16 w-3/4" />
        {/* Subtítulo */}
        <Skeleton className="h-8 w-1/2" />

        {/* Estatísticas */}
        <div className="flex flex-wrap gap-10 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="w-12 h-1" />
              <Skeleton className="h-6 w-32" />
            </div>
          ))}
        </div>
      </div>

      {/* Imagem */}
      <Skeleton className="aspect-square w-full h-auto col-span-2" />
    </section>
  );
};
```

### 2. Integração com Suspense e Estados de Carregamento

```tsx
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<MainBannerSkeleton />}>
      <MainBanner />
    </Suspense>
  );
}
```

### 3. Uso com Hooks de Carregamento

```tsx
const Component = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lógica para carregar dados
    const loadData = async () => {
      // Fetch data...
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) return <MainBannerSkeleton />;
  return <MainBanner />;
};
```

## Melhores Práticas

1. **Mantenha a Estrutura Consistente**: O skeleton deve refletir precisamente a estrutura do componente final.
2. **Animações Sutis**: Use animações como `animate-pulse` para indicar carregamento sem distrair.
3. **Responsividade**: Certifique-se que o skeleton se adapta a diferentes tamanhos de tela.
4. **Tema Escuro**: Garanta que os skeletons funcionem bem em temas claros e escuros.
5. **Timing Inteligente**: Mostre skeletons apenas para carregamentos que durem mais de 300ms.

## Exemplo Avançado Implementado

Para o MainBanner do site Fantasiando, implementamos um skeleton que:

- Reflete a estrutura exata do grid com 5 colunas
- Imita o título, subtítulo, estatísticas e imagem
- Adapta-se ao tema claro/escuro
- Respeita o arredondamento e espaçamentos do design original

```tsx
// Arquivo: src/components/skeletons/MainBannerSkeleton.tsx
// Ver implementação completa abaixo no arquivo criado
```
