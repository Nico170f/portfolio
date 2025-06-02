/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

export interface StatData {
  UpdateType: 'BotsConnected' | 'UniqueUsers' | 'AppLaunches' | 'UniqueServers' | 'DiscordMembers';
  Value: number;
}

@Injectable({
  providedIn: 'root',
})
export class StatsSignalrService {
  private hubConnection: signalR.HubConnection;
  private statsSubject = new BehaviorSubject<any | null>(null);
  public stats$ = this.statsSubject.asObservable();

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5172/stats', {
        withCredentials: true,
      }) // Use your actual SignalR hub endpoint
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start().catch((err) => console.error('SignalR error:', err));

    this.hubConnection.on('update', (data: StatData) => {
      this.statsSubject.next(data);
    });
  }
}
