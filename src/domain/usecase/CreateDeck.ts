import { Card } from '@/domain/entity/deck';
import { Player } from '@/domain/entity/player';
import { DeckRepository } from '@/domain/repository';

export class CreateDeck {
  constructor(
    private readonly deckRepository: DeckRepository
  ) {}

  async execute(inputData: CreateDeck.InputData): Promise<CreateDeck.OutputData> {
    const deck = await this.deckRepository.create(
      inputData.player,
      inputData.cards,
      inputData.capacity
    );

    return {
      id: deck.id,
      elixirAverage: deck.average()
    }
  }
}

export namespace CreateDeck {
  export type InputData = {
    cards: CardModel[]
    player: PlayerModel
    capacity: number
  }

  export type OutputData = {
    id: number | string,
    elixirAverage: number
  }

  export type CardModel = Card
  export type PlayerModel = Player
}